export function isPalindrome(s: string): boolean {
  // Remove all but word characters and convert to lowercase
  const cleanString = s.replace(/\W/g, "").toLowerCase();
  // Process half string
  const halfLength = Math.ceil(cleanString.length / 2);
  return (
    cleanString.slice(0, halfLength) ===
    Array.from(cleanString.slice(halfLength - 1))
      .reverse()
      .join("")
  );
}
