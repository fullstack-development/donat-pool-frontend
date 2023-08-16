import classNames from 'classnames';

import { items } from './data';
import styles from './HowItWorks.module.css';
import { Tutorial } from '..';

const HowItWorks = () => {
  return (
    <>
      <div className="mb-[60px] flex flex-col gap-[60px] max-xl:mb-[30px] max-xl:gap-[30px]">
        {items.map(({ title, description, descriptionMinor, id }) => (
          <div className={styles.item} key={id}>
            <div className={classNames('text-black', styles.main)}>{title}</div>
            <div className={classNames('bg-red text-white max-md:text-black', styles.secondary)}>
              {description}
              {descriptionMinor && <div className="not-italic text-yellow max-md:text-black">{descriptionMinor}</div>}
            </div>
          </div>
        ))}
      </div>
      <Tutorial />
    </>
  );
};

export { HowItWorks };
