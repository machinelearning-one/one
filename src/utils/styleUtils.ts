type Styles = string | undefined;

const styleCat = (styleSegments: Styles[]) => {
  // Instantiate an empty array of strings to store the classes
  const styles: string[] = [];
  // Loop through the styleSegments array and split using the space character
  styleSegments.forEach((styleSegment) => {
    if (styleSegment) {
      // Split the class string using the space character
      const cls = styleSegment.split(" ");
      // Loop through the split array and push the classes to the classes array
      cls.forEach((s) => {
        styles.push(s);
      });
    }
  });
  // Only keep the unique classes
  const unique = [...new Set(styles)];
  // concatenate unique classes in a string
  return unique.join(" ");
};

export { styleCat };
