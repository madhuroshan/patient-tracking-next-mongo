import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";

type PatientProps = {
  patient: Patient;
};

const PatientCard = ({ patient }: PatientProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{patient.name}</CardTitle>
        <CardDescription>{patient.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{patient.address}</p>
        <p
          className={`uppercase w-fit px-2 rounded-md text-white  ${
            patient.dietType === "non-veg" ? "bg-red-500" : "bg-green-300"
          }`}
        >
          {patient.dietType}
        </p>
      </CardContent>
      <CardFooter>
        <Link href={`/patient/${patient.id}`}>
          <Button>View Patient</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PatientCard;
