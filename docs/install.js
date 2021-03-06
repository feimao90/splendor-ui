import ClientOnly from './common/client-only/index.vue';

import ButtonPart from './components/preview/ButtonPart.vue';
import InputPart from './components/preview/InputPart.vue';
import TextareaPart from './components/preview/TextareaPart.vue';
import IconPart from './components/preview/IconPart.vue';
import TagPart from './components/preview/TagPart.vue';
import NotifyPart from './components/preview/NotifyPart.vue';
import DropDownPart from './components/preview/DropDownPart.vue';
import GridPart from './components/preview/GridPart.vue';
import CopyLinkPart from './components/preview/CopyLinkPart.vue';
import LoadingPart from './components/preview/LoadingPart.vue';
import RadioPart from './components/preview/RadioPart.vue';
import CheckboxPart from './components/preview/CheckboxPart.vue';
import SwitchPart from './components/preview/SwitchPart.vue';

import GuideExample from './components/guide/example.vue';
import GuideExampleTsx from './components/guide/example';

import TagBasic from './components/tag/basic.vue';
import NotifyBasic from './components/notify/basic.vue';
import DropdownTheme from './components/dropdown/theme.vue';
import IconList from './components/icon/list.vue';
import CopyLinkBasic from './components/copylink/basic.vue';
import CopyLinkCustom from './components/copylink/custom.vue';
import RadioBasic from './components/radio/basic.vue';
import CheckboxBasic from './components/checkbox/basic.vue';
import CheckboxGroup from './components/checkbox/group.vue';
import SwitchBasic from './components/switch/basic.vue';
import SwitchDisabled from './components/switch/disabled.vue';
import GridBasic from './components/grid/basic.vue';
import CollapseBasic from './components/collapse/basic.vue';
import AccordionBasic from './components/accordion/basic.vue';
import AccordionVModel from './components/accordion/vmodel.vue';
import AccordionMutiple from './components/accordion/mutiple.vue';
import AccordionSlot from './components/accordion/slot.vue';
import PaginationBasic from './components/pagination/basic.vue';
import AlertClosable from './components/alert/closable.vue';
import DialogBasic from './components/dialog/basic.vue';
import DialogNesting from './components/dialog/nesting.vue';
import DialogFooter from './components/dialog/footer.vue';
import SweetAlertBasic from './components/sweetalert/basic.vue';
import SweetAlertConfirm from './components/sweetalert/confirm.vue';
import SweetAlertLoading from './components/sweetalert/loading.vue';
import SweetAlertCustom from './components/sweetalert/custom.vue';
import PopoverPosition from './components/popover/position.vue';
import TooltipPosition from './components/tooltip/position.vue';
import TableBasic from './components/table/basic.vue';
import TableHover from './components/table/hover.vue';
import TableStriped from './components/table/striped.vue';
import TableBordered from './components/table/bordered.vue';
import TableEmpty from './components/table/empty.vue';
import TableLoading from './components/table/loading.vue';
import TableCustom from './components/table/custom.vue';
import TableScroll from './components/table/scroll.vue';
import TableScrollY from './components/table/scrollY.vue';
import TabsModel from './components/tabs/model.vue';
import TabsClosable from './components/tabs/closable.vue';

export default function (app) {
  app.component(ClientOnly.name, ClientOnly);
  app.component(ButtonPart.name, ButtonPart);
  app.component(InputPart.name, InputPart);
  app.component(TextareaPart.name, TextareaPart);
  app.component(IconPart.name, IconPart);
  app.component(TagPart.name, TagPart);
  app.component(NotifyPart.name, NotifyPart);
  app.component(DropDownPart.name, DropDownPart);
  app.component(GridPart.name, GridPart);
  app.component(GuideExample.name, GuideExample);
  app.component(CopyLinkPart.name, CopyLinkPart);
  app.component(LoadingPart.name, LoadingPart);
  app.component(RadioPart.name, RadioPart);
  app.component(CheckboxPart.name, CheckboxPart);
  app.component(SwitchPart.name, SwitchPart);
  app.component('GuideExampleTsx', GuideExampleTsx);
  app.component('TagBasic', TagBasic);
  app.component('NotifyBasic', NotifyBasic);
  app.component('DropdownTheme', DropdownTheme);
  app.component('IconList', IconList);
  app.component('CopyLinkBasic', CopyLinkBasic);
  app.component('CopyLinkCustom', CopyLinkCustom);
  app.component('RadioBasic', RadioBasic);
  app.component('CheckboxBasic', CheckboxBasic);
  app.component('CheckboxGroup', CheckboxGroup);
  app.component('SwitchBasic', SwitchBasic);
  app.component('SwitchDisabled', SwitchDisabled);
  app.component('GridBasic', GridBasic);
  app.component('CollapseBasic', CollapseBasic);
  app.component('AccordionBasic', AccordionBasic);
  app.component('AccordionVModel', AccordionVModel);
  app.component('AccordionMutiple', AccordionMutiple);
  app.component('AccordionSlot', AccordionSlot);
  app.component('PaginationBasic', PaginationBasic);
  app.component('AlertClosable', AlertClosable);
  app.component('DialogBasic', DialogBasic);
  app.component('DialogNesting', DialogNesting);
  app.component('DialogFooter', DialogFooter);
  app.component('SweetAlertBasic', SweetAlertBasic);
  app.component('SweetAlertConfirm', SweetAlertConfirm);
  app.component('SweetAlertLoading', SweetAlertLoading);
  app.component('SweetAlertCustom', SweetAlertCustom);
  app.component('PopoverPosition', PopoverPosition);
  app.component('TooltipPosition', TooltipPosition);
  app.component('TableBasic', TableBasic);
  app.component('TableHover', TableHover);
  app.component('TableLoading', TableLoading);
  app.component('TableStriped', TableStriped);
  app.component('TableBordered', TableBordered);
  app.component('TableEmpty', TableEmpty);
  app.component('TableCustom', TableCustom);
  app.component('TableScroll', TableScroll);
  app.component('TableScrollY', TableScrollY);
  app.component('TabsModel', TabsModel);
  app.component('TabsClosable', TabsClosable);
}
