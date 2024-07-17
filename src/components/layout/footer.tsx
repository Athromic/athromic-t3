import { BuyMeACoffee } from "../shared/icons";

export default function Footer() {
  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-gray-500">
        A project crafted by{" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>Mason</i>
        </a>
        .
        <div className="justify-center mx-auto mt-2 flex max-w-fit items-center space-x-2">
            <a href="#" className="text-black hover:underline-offset-auto justify-center items-center">Terms of Service</a>
            <p>|</p>
            <a href="#" className="text-black hover:underline-offset-auto justify-center items-center">Privacy Policy</a>
        </div>
        <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-2 flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-6 py-2 transition-all duration-75 hover:scale-105"
      >
        <BuyMeACoffee className="h-6 w-6" />
        <p className="font-medium text-gray-600">this will do something</p>
      </a>
      </p>
    </div>
  );
}
