import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function Form() {
  return (
    <form className="flex w-full flex-col bg-[#ffffff]! px-4 md:px-16 gap-4 shadow-md">
      <div>
        <div className="mb-2 block">
          <Label className="text-[#1C352D]!" htmlFor="email1">Your email</Label>
        </div>
        <TextInput id="email1" type="email" placeholder="name@lather.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="text-[#1C352D]!" htmlFor="name1">Your name</Label>
        </div>
        <TextInput id="name1" type="text" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label className="text-[#1C352D]!" htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit" className="bg-[#FEA405]! text-[#1C352D]! ">Submit</Button>
    </form>
  );
}
