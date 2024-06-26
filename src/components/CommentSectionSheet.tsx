"use client";

import * as React from "react";
import { CommentSection } from "replyke";

import { useMediaQuery } from "@uidotdev/usehooks";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./shared/ui/sheet";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./shared/ui/drawer";
import { milanConfig } from "../data/config/style-configs";
import { ScrollArea } from "./shared/ui/scroll-area";
import { comment } from "postcss";

export function CommentSectionSheet({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const config = milanConfig;

  const title = "See it in Action";
  const description =
    "This is the comment section in its default style. You can try and leave a comment to see it in action. Use the studio to customize the UI to fit to your own project.";

  const commentSection = (
    <CommentSection
      apiBaseUrl={process.env.NEXT_PUBLIC_API_URL!}
      articleId="home"
      styleId="6491c41f70fd8008dcec1a09"
      // sectionProps={{ ...config?.sectionProps }}
      // formProps={{ ...config?.formProps }}
      // statsBarProps={{ ...config?.statsBarProps }}
      // commentElementsProps={{ ...config?.commentElementsProps }}
      callbacks={{
        loginClickCallback: () =>
          alert("You will change this to your own login implementation"),
      }}
      currentUser={{
        _id: "landing-page-user",
        name: "Visitor",
      }}
    />
  );

  if (isDesktop) {
    return (
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="h-screen overflow-hidden flex flex-col p-0">
          <SheetHeader className="p-6">
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>
          <ScrollArea className="flex-1">
            <div className="m-6 mt-0">{commentSection}</div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="h-5/6 flex flex-col">
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="flex-1">
          <div className="m-6 mt-0">{commentSection}</div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}

export default CommentSectionSheet;
