import { computed, onMounted } from 'vue';
// import parts from '../data/parts';
import usePartStore from '../stores/partsStores';

export default function useSearch(searchTerm) {
  const partStore = usePartStore();
  partStore.getParts();

  const allParts = computed(() => [...partStore.parts.heads, ...partStore.parts.arms,
    ...partStore.parts.torsos,
    ...partStore.parts.bases]);

  const results = computed(() => {
    let searchResults;
    if (!searchTerm.value) searchResults = allParts.value;
    else {
      const lowerTerm = searchTerm.value.toLowerCase();
      searchResults = allParts.value.filter(
        (part) => part.title.toLowerCase().includes(lowerTerm),
      );
    }
    return [...searchResults];
  });

  onMounted(() => console.log('Mounted: useSearch'));

  return { searchResults: results };
}
