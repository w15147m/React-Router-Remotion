import { z } from "zod";
import { AlignEnd } from "../../layout/AlignEnd";
import { Button } from "../../ui/Button";
import { InputContainer } from "../../ui/InputContainer";
import { DownloadButton } from "./DownloadButton";
import { ErrorComp } from "../../ui/Error";
import { Input } from "../../ui/Input";
import { ProgressBar } from "../../ui/ProgressBar";
import { Spacing } from "../../layout/Spacing";
import { useRendering } from "../../../lib/use-rendering";
import { COMPOSITION_ID } from "~/remotion/constants.mjs";
import { CompositionProps } from "~/remotion/schemata";

export const RenderControls: React.FC<{
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  inputProps: z.infer<typeof CompositionProps>;
}> = ({ text, setText, inputProps }) => {
  const { renderMedia, state, undo } = useRendering(COMPOSITION_ID, inputProps);

  return (
    <InputContainer>
      {state.status === "init" ||
      state.status === "invoking" ||
      state.status === "error" ? (
        <>
          <Input
            disabled={state.status === "invoking"}
            setText={setText}
            text={text}
          ></Input>
          <Spacing></Spacing>
          <AlignEnd>
            <Button
              disabled={state.status === "invoking"}
              loading={state.status === "invoking"}
              onClick={renderMedia}
            >
              Render video
            </Button>
          </AlignEnd>
          {state.status === "error" ? (
            <ErrorComp message={state.error.message}></ErrorComp>
          ) : null}
        </>
      ) : null}
      {state.status === "rendering" ? (
        <>
          <ProgressBar progress={0.5} />
          <Spacing></Spacing>
          <div className="text-sm text-foreground opacity-60">
            Rendering your video...
          </div>
        </>
      ) : null}
      {state.status === "done" ? (
        <>
          <ProgressBar progress={1} />
          <Spacing></Spacing>
          <AlignEnd>
            <DownloadButton undo={undo} state={state}></DownloadButton>
          </AlignEnd>
        </>
      ) : null}
    </InputContainer>
  );
};
