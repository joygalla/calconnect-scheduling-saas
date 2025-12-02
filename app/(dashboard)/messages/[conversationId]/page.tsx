"use client";

import { useParams } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function ConversationPage() {
  const { conversationId }: any = useParams();

  return (
    <div style={{ padding: "30px" }}>
      <PageHeader title="Message Details" />
      <Card>
        <p>Conversation ID: {conversationId}</p>
      </Card>
    </div>
  );
}