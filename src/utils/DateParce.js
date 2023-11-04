import { formatDistanceToNow } from 'date-fns';

export const dateParce = dateValue => {
  return formatDistanceToNow(new Date(dateValue), { addSuffix: true });
};
