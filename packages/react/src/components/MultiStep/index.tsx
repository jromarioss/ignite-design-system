import { Label, MultiStepContainer, Step, Steps } from './styles';

export interface MultiStepProps {
  size: number,
  currentSep?: number;
}

export function MultiStep({ size, currentSep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>Passo {currentSep} de {size}</Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map(step => {
          return <Step key={step} active={currentSep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  );
}

MultiStep.displayName = 'MultiStep';