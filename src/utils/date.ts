export const formatDate = (d: Date | string) => {
  if (typeof d === 'string') d = new Date(d)

  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
