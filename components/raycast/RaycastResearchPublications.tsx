"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  getResearchCategoryLabel,
  researchPublicationCategories,
  researchPublications,
  type ResearchTeamId,
} from "./research-data";

export default function RaycastResearchPublications() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ResearchTeamId | "all">("all");

  const filteredPublications = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return researchPublications.filter((publication) => {
      const matchesCategory =
        activeCategory === "all" || publication.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        publication.title.toLowerCase().includes(normalizedQuery) ||
        getResearchCategoryLabel(publication.category).toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section className="research-publications-section">
      <div className="pro-section-inner">
        <div className="research-publications-header">
          <h2>Publications</h2>
          <label className="research-publications-search">
            <span className="sr-only">Search publications</span>
            <input
              type="search"
              placeholder="Search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>

        <div className="research-publications-filters" role="tablist" aria-label="Publication categories">
          {researchPublicationCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.id}
              className={`research-publications-filter ${
                activeCategory === category.id ? "research-publications-filter-active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="research-publications-table-wrap">
          <table className="research-publications-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {filteredPublications.map((publication) => (
                <tr key={publication.slug}>
                  <td>
                    <time dateTime={publication.dateTime}>{publication.date}</time>
                  </td>
                  <td>{getResearchCategoryLabel(publication.category)}</td>
                  <td>
                    <Link href={`/blog/${publication.slug}`}>{publication.title}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredPublications.length === 0 && (
            <p className="research-publications-empty">No publications match your search.</p>
          )}
        </div>
      </div>
    </section>
  );
}
