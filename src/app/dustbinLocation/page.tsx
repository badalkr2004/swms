import React from 'react';
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const GarbageLocationForm = () => {
  const form = useForm({
    defaultValues: {
      location_latitude: "",
      location_longitude: "",
      address: "",
    }
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/garbage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      // Reset form after successful submission
      form.reset();
      alert('Location submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting location. Please try again.');
    }
  };

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        form.setValue("location_latitude", position.coords.latitude.toString());
        form.setValue("location_longitude", position.coords.longitude.toString());
      });
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Report Garbage Location</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={getCurrentLocation}
                className="flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Get Current Location
              </Button>
            </div>

            <FormField
              control={form.control}
              name="location_latitude"
              rules={{ required: "Latitude is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Latitude</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter latitude" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location_longitude"
              rules={{ required: "Longitude is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Longitude</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter longitude" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              rules={{ required: "Address is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit Location
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default GarbageLocationForm;