"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { MapPin, Loader2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationTable = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const itemsPerPage = 10;

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/getdustbinlocation");
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();
      setLocations(result.data); 
      setError(null);
    } catch (err) {
      setError("Error fetching locations: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortedData = () => {
    if (!sortConfig.key) return locations;

    return [...locations].sort((a, b) => {
      if (sortConfig.key === "date_created") {
        return sortConfig.direction === "asc"
          ? new Date(a.date_created) - new Date(b.date_created)
          : new Date(b.date_created) - new Date(a.date_created);
      }

      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  const filteredData = getSortedData().filter(
    (location) =>
      location.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.location_latitude?.toString().includes(searchTerm) ||
      location.location_longitude?.toString().includes(searchTerm) ||
      location.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const SortHeader = ({ column, label }) => (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => sortData(column)}
    >
      {label}
      {sortConfig.key === column && (
        <span className="text-xs">
          {sortConfig.direction === "asc" ? "↑" : "↓"}
        </span>
      )}
    </div>
  );

  const viewOnMap = (latitude, longitude) => {
    window.open(
      `https://www.google.com/maps?q=${latitude},${longitude}`,
      "_blank"
    );
  };

  if (error) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="text-red-500">{error}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Location Data</span>
          <Button
            variant="outline"
            onClick={fetchLocations}
            disabled={isLoading}
          >
            {isLoading ? "Refreshing..." : "Refresh Data"}
          </Button>
        </CardTitle>
        <div className="mt-4">
          <Input
            placeholder="Search locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center p-8">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        ) : (
          <>
            <div className="rounded-md border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <SortHeader column="address" label="Address" />
                    </TableHead>
                    <TableHead>
                      <SortHeader column="description" label="Description" />
                    </TableHead>
                    <TableHead>
                      <SortHeader column="location_latitude" label="Latitude" />
                    </TableHead>
                    <TableHead>
                      <SortHeader
                        column="location_longitude"
                        label="Longitude"
                      />
                    </TableHead>
                    <TableHead>
                      <SortHeader column="date_created" label="Date Created" />
                    </TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedData.map((location) => (
                    <TableRow key={location._id}>
                      <TableCell className="font-medium max-w-xs truncate">
                        {location.address}
                      </TableCell>
                      <TableCell className="max-w-xs truncate">
                        {location.description}
                      </TableCell>
                      <TableCell>{location.location_latitude}</TableCell>
                      <TableCell>{location.location_longitude}</TableCell>
                      <TableCell className="whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {formatDate(location.date_created)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            viewOnMap(
                              location.location_latitude,
                              location.location_longitude
                            )
                          }
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          View on Map
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {totalPages > 1 && (
              <div className="mt-4">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                      />
                    </PaginationItem>

                    {[...Array(totalPages)].map((_, i) => (
                      <PaginationItem key={i + 1}>
                        <PaginationLink
                          onClick={() => setCurrentPage(i + 1)}
                          isActive={currentPage === i + 1}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                        disabled={currentPage === totalPages}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default LocationTable;
