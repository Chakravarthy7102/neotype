export default function isJSON(value: string) {
  if (typeof value !== "string") return false;
  try {
    const result = JSON.parse(value);
    const type = Object.prototype.toString.call(result);
    return type === "[object Object]" || type === "[object Array]";
  } catch (err) {
    return false;
  }
}
