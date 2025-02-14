import { useQuery } from '@tanstack/react-query';

import { categoryLists, getMsets, getTabName } from '@/shared/apis/modal/axios';

export const useGetTabName = (requestUrl: string) => {
	return useQuery({
		queryKey: ['UrlTabName', requestUrl],
		queryFn: () => getTabName(requestUrl),
		enabled: requestUrl !== '',
	});
};

export const useCategoryLists = () => {
	return useQuery({
		queryKey: ['categories'],
		queryFn: categoryLists,
	});
};

export const useGetMsets = (categoryId: number) => {
	return useQuery({
		queryKey: ['msets', categoryId],
		queryFn: () => getMsets(categoryId),
		enabled: categoryId !== 0,
	});
};
