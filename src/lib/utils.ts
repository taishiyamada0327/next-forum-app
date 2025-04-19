import { formatDistanceToNow, format, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';

export function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  const now = new Date();

  // 24時間以内の場合は相対時間で表示
  if (now.getTime() - date.getTime() < 24 * 60 * 60 * 1000) {
    return formatDistanceToNow(date, { addSuffix: true, locale: ja });
  }

  // それ以外は日付フォーマット
  return format(date, 'yyyy年MM月dd日 HH:mm', { locale: ja });
}
