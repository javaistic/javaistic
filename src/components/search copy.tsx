"use client";
import { liteClient } from "algoliasearch/lite";
import { type SharedProps } from "fumadocs-ui/components/dialog/search";
import AlgoliaSearchDialog from "fumadocs-ui/components/dialog/search-algolia";
import { useI18n } from "fumadocs-ui/contexts/i18n";
import React from "react";

const appId = "29OTE3ZL5A";
const apiKey = "db5402611202402ead076cf156fa889b";
const client = liteClient(appId, apiKey);

export default function SearchDialog(props: SharedProps) {
  const { locale } = useI18n(); // (optional) for i18n
  return (
    <AlgoliaSearchDialog
      open={props.open}
      onOpenChange={props.onOpenChange}
      searchOptions={{
        client,
        indexName: "javaistic",
        locale,
      }}
      showAlgolia={true}
      allowClear
    />
  );
}
