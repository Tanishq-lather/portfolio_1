import { Card } from "flowbite-react";

export function Pcard(props) {
  return (
    <Card
      className={`max-w-sm w-60 md:w-full ${props.className || ""}`}
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={props.src}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
    </Card>
  );
}
