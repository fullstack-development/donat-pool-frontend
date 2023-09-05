import Link from 'next/link';

import GithubIcon from '@public/icons/github.svg';
import TwitterIcon from '@public/icons/twitter.svg';

function Socials() {
  return (
    <div className="flex gap-10">
      <Link target="_blank" rel="noreferrer" href="https://github.com/fullstack-development">
        <GithubIcon />
      </Link>
      <Link target="_blank" rel="noreferrer" href="https://twitter.com/DonatPool">
        <TwitterIcon />
      </Link>
    </div>
  );
}

export default Socials;