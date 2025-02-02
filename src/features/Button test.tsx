import { Button } from "@/components/ui/button"

export const TestComponent = () => {
    return(
        <div className="flex gap-4">
            <Button>
                Primary
            </Button>
            <Button variant={"secondary"} size={"lg"}>
                Secondary
            </Button>
            <Button variant={"destructive"}>
                Destructive
            </Button>
            <Button variant={"ghost"}>
                Ghost
            </Button>
            <Button variant={"outline"}>
                Outline
            </Button>
            <Button variant={"link"}>
                Link
            </Button>
            <Button variant={"muted"} size={"sm"}>
                Muted
            </Button>
            <Button variant={"teritary"}>
                Teritary
            </Button>
        </div>
    )
}