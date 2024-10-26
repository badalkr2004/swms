"use client";

import React, { useState } from "react";
import { MapPin, Camera, Check, AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const WasteReportInterface = () => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [reportStatus, setReportStatus] = useState("pending");

  const handleLocationDetect = () => {
    // Simulating geolocation detection
    setLocation({ lat: "40.7128° N", lng: "74.0060° W" });
    setStep(2);
  };

  const handleImageUpload = (e) => {
    // In a real app, you'd handle file upload here
    setImagePreview("/api/placeholder/400/300");
    setStep(3);
  };

  const handleSubmitReport = () => {
    // In a real app, you'd send this to your backend
    setReportStatus("submitted");
    setStep(4);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
            Report Waste Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Step 1: Location Selection */}
          <div className={`mb-6 ${step !== 1 && "opacity-50"}`}>
            <h3 className="text-lg font-semibold mb-3">
              Step 1: Share Location
            </h3>
            <div className="space-y-4">
              <Button
                onClick={handleLocationDetect}
                className="w-full flex items-center justify-center gap-2"
                disabled={step !== 1}
              >
                <MapPin className="h-4 w-4" />
                Detect My Location
              </Button>
              {location && (
                <Alert>
                  <AlertTitle>Location Detected</AlertTitle>
                  <AlertDescription>
                    Coordinates: {location.lat}, {location.lng}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>

          {/* Step 2: Image Upload */}
          <div className={`mb-6 ${step !== 2 && "opacity-50"}`}>
            <h3 className="text-lg font-semibold mb-3">Step 2: Upload Photo</h3>
            <div className="space-y-4">
              <Button
                onClick={handleImageUpload}
                className="w-full flex items-center justify-center gap-2"
                disabled={step !== 2}
              >
                <Camera className="h-4 w-4" />
                Take Photo
              </Button>
              {imagePreview && (
                <div className="mt-4">
                  <Image
                    src={imagePreview}
                    alt="Waste preview"
                    className="rounded-lg w-full"
                    width={400}
                    height={300}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Step 3: Description */}
          <div className={`mb-6 ${step !== 3 && "opacity-50"}`}>
            <h3 className="text-lg font-semibold mb-3">
              Step 3: Add Description
            </h3>
            <textarea
              className="w-full p-2 border rounded-md"
              rows="4"
              placeholder="Describe the waste and any additional details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={step !== 3}
            />
            {step === 3 && (
              <Button onClick={handleSubmitReport} className="w-full mt-4">
                Submit Report
              </Button>
            )}
          </div>

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <Alert className="bg-green-50">
              <Check className="h-4 w-4 text-green-500" />
              <AlertTitle>Thank You!</AlertTitle>
              <AlertDescription>
                Your report has been submitted successfully. The waste
                management team will handle it soon. Your contribution helps
                keep our city clean!
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Progress Indicator */}
      <div className="flex justify-between px-2">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div
            key={stepNumber}
            className={`w-6 h-6 rounded-full flex items-center justify-center ${
              stepNumber <= step ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {stepNumber}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WasteReportInterface;
