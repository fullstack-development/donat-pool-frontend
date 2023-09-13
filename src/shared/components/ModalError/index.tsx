import { DoubleBorderedButton, Modal } from '@/shared/components';
import BittenDonutImage from '@public/images/bitten-donut.svg';

import type { Props } from './types';

function ModalError({ title, errorText = '', onClose }: Props) {
  return (
    <Modal>
      <h1
        className="mb-6
          text-center
          font-rammetto-one
          text-4xl/[104%]
          text-red
          max-lg:text-[2.25rem]
          max-sm:text-[2.25rem]"
      >
        {title}
      </h1>
      <div className="flex flex-col items-center">
        <BittenDonutImage className="mb-10" />
        <div className="mb-6 [overflow-wrap:anywhere]">{errorText}</div>
        <DoubleBorderedButton primaryColor="blue" backgroundColor="white" isFullWidth onClick={onClose}>
          Close button
        </DoubleBorderedButton>
      </div>
    </Modal>
  );
}

export default ModalError;
