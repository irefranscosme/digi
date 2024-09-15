'use server';

import dynamic from 'next/dynamic';

const CreateIncomeDrawer = dynamic(() => import('./create-income-drawer'), {
    ssr: false,
});

const CreateButton = () => {
    return <CreateIncomeDrawer />;
};

export default CreateButton;
