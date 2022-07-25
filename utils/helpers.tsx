export function formatUKDate(date: string) {
  return new Intl.DateTimeFormat('en-GB').format(new Date(date));
}
