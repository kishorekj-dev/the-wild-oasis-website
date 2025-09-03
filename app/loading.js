import { DivideIcon } from "@heroicons/react/24/solid";
import Spinner from "./_components/Spinner";

export default function loading() {
  return (
    <div className="flex items-center justify-center h-full">
      <Spinner />;
    </div>
  );
}
