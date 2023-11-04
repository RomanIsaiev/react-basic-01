import { formatDistanceToNow, format } from 'date-fns';

export const dateParce = dateValue => {
  return formatDistanceToNow(new Date(dateValue), { addSuffix: true });
};

export const dateTrans = dateValue => {
  return format(new Date(dateValue), "Pp");
};