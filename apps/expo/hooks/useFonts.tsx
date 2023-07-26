import * as Font from 'expo-font';
import { tamaguiFonts } from '@my/ui/src/theme/fonts.native';

export const useFonts = async () => {
  await Font.loadAsync(tamaguiFonts);
};
