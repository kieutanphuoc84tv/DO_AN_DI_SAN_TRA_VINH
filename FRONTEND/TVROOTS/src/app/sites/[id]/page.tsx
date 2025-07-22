"use client";
import React from "react";

import { use } from "react";

interface Site {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  established: string;
  recognition: string;
}

interface SiteDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function SiteDetailPage({ params }: SiteDetailPageProps) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [site, setSite] = React.useState<Site | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    async function fetchSite() {
      try {
        if (!id) return;
        const res = await fetch(`http://localhost:3000/sites/${id}`);
        if (!res.ok) {
          throw new Error("Site not found");
        }
        const text = await res.text();
        try {
          const data = JSON.parse(text);
          if (!data || Object.keys(data).length === 0) {
            throw new Error("No data found");
          }
          setSite(data);
          setLoading(false);
        } catch (err) {
          console.error("Failed to parse JSON:", err, "Response text:", text);
          throw err;
        }
      } catch (err) {
        console.error("Error fetching site data:", err);
        setError("Không tìm thấy trang hoặc dữ liệu.");
        setLoading(false);
      }
    }
    fetchSite();
  }, [id]);

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
