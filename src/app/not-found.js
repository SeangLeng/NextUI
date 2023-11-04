import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function NotFound() {
    return (
        <div className="flex justify-center h-screen items-center">
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md text-red-600 font-semibold">Page not found</p>
                        <p className="text-small text-default-500">kquickSight.org</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>You seems lost, click the link to go homepage</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        showAnchorIcon
                        href="/"
                    >
                        Back to homepage
                    </Link>
                </CardFooter>
            </Card>
        </div>

    );
}
