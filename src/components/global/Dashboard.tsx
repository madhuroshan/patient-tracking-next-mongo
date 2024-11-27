"use client";
import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import PatientCard from "./PatientCard";
import { patients } from "@/lib/data";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold"> Dashboard </h1>
        <Button
          onClick={() => {
            console.log("Add new patient");
          }}
        >
          <PlusCircle /> Create Patient
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-2 mt-6 mx-4">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
