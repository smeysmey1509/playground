// utils.ts

/**
 * Generates default attributes based on provided default values.
 */
export const getDefaultAttributes = <T>(defaultValues: T): T => {
  return { ...defaultValues };
};

/**
 * Generates form fields from the attributes object.
 */
export const generateFieldsFromAttributes = <T extends Record<string, any>>(
  attributes: T
) => {
  return Object.keys(attributes).map((key) => {
    const value = attributes[key];
    let type = "text";
    if (typeof value === "number") type = "number";
    if (key === "shape") {
      return {
        type: "radio",
        label: "Avatar Shape",
        name: key,
        options: [
          { label: "Circle", value: "circle" },
          { label: "Square", value: "square" },
        ],
      };
    }
    return {
      type,
      label: key.charAt(0).toUpperCase() + key.slice(1),
      name: key,
    };
  });
};
