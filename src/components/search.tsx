"use client";
import { useDocsSearch } from "fumadocs-core/search/client";
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
  TagsList,
  TagsListItem,
} from "fumadocs-ui/components/dialog/search";
import { useI18n } from "fumadocs-ui/contexts/i18n";
import { ArrowDownIcon, ArrowUpIcon, CornerDownLeftIcon } from "lucide-react";
import { useState } from "react";

const items = [
  {
    name: "All",
    value: "",
  },
  {
    name: "Docs",
    description: "Only results about documentation",
    value: "docs",
  },
  {
    name: "Programming",
    description: "Only results about programming languages",
    value: "programs",
  },
];

export default function CustomSearchDialog(props: SharedProps) {
  const { locale } = useI18n(); // (optional) for i18n
  const [tag, setTag] = useState<string | undefined>();
  const { search, setSearch, query } = useDocsSearch({
    type: "fetch",
    locale,
    tag,
    delayMs: 500,
  });

  return (
    <SearchDialog
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
      {...props}
    >
      <SearchDialogOverlay className="backdrop-blur-md" />
      <SearchDialogContent className="sm:-mt-10">
        <SearchDialogHeader className="flex flex-col items-start">
          <div className="flex w-full items-center justify-between gap-x-3">
            <SearchDialogIcon />
            <SearchDialogInput />
            <SearchDialogClose />
          </div>
          <TagsList tag={tag} onTagChange={setTag}>
            {items.map((item) => (
              <TagsListItem key={item.value} value={item.value ?? ""}>
                {item.name}
              </TagsListItem>
            ))}
          </TagsList>
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== "empty" ? query.data : null} />
        <SearchDialogFooter className="text-muted-foreground flex items-center justify-between p-2 py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <kbd className="bg-fd-background inline-flex size-6 items-center justify-center rounded-md border">
                <ArrowUpIcon className="size-3" />
              </kbd>
              <kbd className="bg-fd-background inline-flex size-6 items-center justify-center rounded-md border">
                <ArrowDownIcon className="size-3" />
              </kbd>
              <span className="ml-1">Navigate</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="bg-fd-background inline-flex items-center justify-center rounded-md border px-2 py-1">
                <CornerDownLeftIcon className="size-3" />
              </kbd>
              <span>Select</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="bg-fd-background rounded-md border px-2 py-1 text-[10px]">
                ESC
              </kbd>
              <span>Close</span>
            </div>
          </div>
        </SearchDialogFooter>
      </SearchDialogContent>
    </SearchDialog>
  );
}
