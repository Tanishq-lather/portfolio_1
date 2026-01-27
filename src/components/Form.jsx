import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function Form() {
  return (
    <form className="flex! min-w-screen! flex-col! px-16! gap-4!">
      <div>
        <div className="mb-2! block!">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput id="email1" type="email" placeholder="name@lather.com" required />
      </div>
      <div>
        <div className="mb-2! block!">
          <Label htmlFor="name1">Your name</Label>
        </div>
        <TextInput id="name1" type="text" required />
      </div>
      <div className="flex! items-center! gap-2!">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit" className="bg-[#FEA405]! text-[#1C352D]! ">Submit</Button>
    </form>
  );
}
