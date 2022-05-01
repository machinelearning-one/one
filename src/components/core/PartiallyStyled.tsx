interface PartiallyStyledProps {
  content: string;
  tokens: string[];
  styles: string[];
}

interface State {
  styled: boolean;
  value: string;
}

const PartiallyStyled = ({ content, tokens, styles }: PartiallyStyledProps) => {
  // split content by space
  const words = content.split(" ");
  // create empty array of State
  const states: State[] = [];
  // iterate through words
  words.forEach((word: string) => {
    // check if word is in words array
    if (tokens.includes(word)) {
      // if so, push word to states as State with styled: true and value: word
      states.push({ styled: true, value: word });
    } else {
      // if last State is not a styled, append word to last State value
      if (states.length > 0 && !states[states.length - 1].styled) {
        states[states.length - 1].value += ` ${word}`;
      } else {
        // if not, push word to states as State with styled: false and value: word
        states.push({ styled: false, value: word });
      }
    }
  });
  // create empty array of JSX elements
  const _JSX: JSX.Element[] = [];
  let counter = 0;
  // iterate through states
  states.forEach((state: State, index: number) => {
    // add ' ' after each value if index is not the last
    const spacing = index !== states.length - 1 ? " " : "";
    const value = state.value + spacing;
    // if state.styled is true
    if (state.styled) {
      _JSX.push(
        <span className={styles[counter]} key={index}>
          {value}
        </span>
      );
      // increment counter
      counter++;
    } else {
      _JSX.push(<span key={index}>{value}</span>);
    }
  });
  return <>{_JSX}</>;
};

export default PartiallyStyled;
export type { PartiallyStyledProps };
