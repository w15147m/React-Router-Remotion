import { ActionFunctionArgs } from "react-router";
import { renderVideo } from "../lib/render-video.server";
import { COMPOSITION_ID } from "../remotion/constants.mjs";
import { RenderRequest, CompositionProps } from "../remotion/schemata";
import type { ApiResponse } from "../lib/api";
import type { RenderResponse } from "../lib/types";

export async function action({ request }: ActionFunctionArgs) {
  try {
    const body = await request.json();
    const { inputProps } = RenderRequest.parse(body);

    // Validate input props
    CompositionProps.parse(inputProps);

    // Generate a unique filename
    const timestamp = Date.now();
    const fileName = `video-${timestamp}.mp4`;

    const result = await renderVideo({
      composition: COMPOSITION_ID,
      inputProps,
      outName: fileName,
    });

    const response: ApiResponse<RenderResponse> = {
      type: "success",
      data: result,
    };

    return new Response(JSON.stringify(response), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const response: ApiResponse<never> = {
      type: "error",
      message: error instanceof Error ? error.message : "Unknown error",
    };
    return new Response(JSON.stringify(response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
