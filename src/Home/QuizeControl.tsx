import { Button } from "@/components/ui/button";

export default function QuizeControl() {

    const handelNext=()=>{
        console.log('btn cline')

    }
  return <div className="flex justify-between mt-3 space-x-4">


    <Button>previous</Button>
    <Button onClick={handelNext}>next</Button>
    </div>;
}
