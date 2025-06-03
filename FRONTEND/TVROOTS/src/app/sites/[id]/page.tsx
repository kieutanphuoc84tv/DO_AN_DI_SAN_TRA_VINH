import { useEffect, useState } from "react";

interface Site {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  established: string;
  recognition: string;
}

import React from "react";

interface SiteDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function SiteDetailPage({ params }: SiteDetailPageProps) {
  const [site, setSite] = React.useState<Site | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    async function fetchSite() {
      try {
        const resolvedParams = await params;
        const id = resolvedParams.id;
        if (!id) return;
        const res = await fetch(`/sites/${id}`);
        if (!res.ok) {
          throw new Error("Site not found");
        }
        const data = await res.json();
        setSite(data);
        setLoading(false);
      } catch {
        setError("Không tìm thấy trang hoặc dữ liệu.");
        setLoading(false);
      }
    }
    fetchSite();
  }, [params]);

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{site?.name}</h1>
      <img src={`/image/${site?.image}`} alt={site?.name} style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "1rem" }} />
      <p style={{ marginBottom: "0.5rem" }}>{site?.description}</p>
      <p style={{ marginBottom: "0.5rem" }}><strong>Địa điểm:</strong> {site?.location}</p>
      <p style={{ marginBottom: "0.5rem" }}><strong>Thành lập:</strong> {site?.established}</p>
      <p style={{ marginBottom: "0.5rem" }}><strong>Công nhận:</strong> {site?.recognition}</p>
    </div>
  );
}
