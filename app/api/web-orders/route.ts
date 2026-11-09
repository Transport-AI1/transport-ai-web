import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  return NextResponse.json(
    {
      error:
        "La creación de páginas web no está disponible temporalmente. Vuelve a consultarnos próximamente.",
    },
    { status: 503 }
  );
}
