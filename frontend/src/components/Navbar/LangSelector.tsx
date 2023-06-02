import React from 'react';
import { SelectPicker } from 'rsuite';
import { useRouter } from 'next/router';
import { translateMaker, changeLanguage } from '../../utils';
const LangSelector = ({cbCloseFunc}) => {
  const router = useRouter();
  const { locale } = router;
  const t = translateMaker(router);
  // const data = [
  //   { label: 'English', value: 'en' },
  //   { label: '中文', value: 'cn' },
  // ].map((item) => ({ label: item.label, value: item.value }));

  const handleClick= (e)=>{
    changeLanguage(e, router);
    cbCloseFunc()
  }
  return (
    <div>
      <select
        onChange={(e) => {
          handleClick(e);
        }}
        defaultValue={locale}
        className="cs-border-btn-t-100 text-md ml-4 w-[84px] rounded-xl bg-transparent px-1 py-2 font-medium text-gray-600 dark:text-gray-400"
      >
        <option value="en">English</option>
        <option value="cn">中文</option>
      </select>{' '}
    </div>
  );
};

export default LangSelector;
