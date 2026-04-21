import type { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

type RadialItem = {
  id: string;
  label: string;
  icon: IconName | [IconPrefix, IconName] | string;
  onSelect?: (currentMenu: string | null, itemIndex: number) => void | string;
  menu?: string;
  iconWidth?: number;
  iconHeight?: number;
};

export const addRadialItem = (items: RadialItem | RadialItem[]) => exports.kt_lib.addRadialItem(items);

export const removeRadialItem = (item: string) => exports.kt_lib.removeRadialItem(item);

export const registerRadial = (radial: { id: string; items: Omit<RadialItem, 'id'>[] }) =>
  exports.kt_lib.registerRadial(radial);

export const getCurrentRadialId = () => exports.kt_lib.getCurrentRadialId();

export const hideRadial = () => exports.kt_lib.hideRadial();

export const disableRadial = (state: boolean) => exports.kt_lib.disableRadial(state);
