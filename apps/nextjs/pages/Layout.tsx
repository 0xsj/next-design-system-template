import {
  Button,
  XStack,
  Paragraph,
  YStack,
  AnimatePresence,
  isClient
} from 'tamagui';
import { Menu } from '@tamagui/lucide-icons';
import { useEffect, useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setOpenMenu(x => !x);

  useEffect(() => {
    if (isClient) {
      const onScroll = () => {
        setIsScrolled(window.scrollY > 30);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, []);
  return (
    <YStack flex={1}>
      <AnimatePresence>
        {openMenu && (
          <YStack
            key={'drawer-menu'}
            onPress={toggleMenu}
            position={'absolute'}
            width={'100%'}
            height={'100%'}
            animation={'quick'}
            x={0}
            exitStyle={{ x: -1000 }}
            enterStyle={{ x: -1000 }}
            zIndex={5000}
            style={{ opacity: 0.9 }}
          >
            {
              // menu container
              <YStack
                backgroundColor={'$background'}
                flex={1}
                justifyContent="center"
                alignItems="center"
              >
                <Paragraph>Menu</Paragraph>
              </YStack>
            }
          </YStack>
        )}
      </AnimatePresence>
      <XStack
        elevation={isScrolled ? 0 : '$1'}
        space={5}
        paddingHorizontal="$2"
      >
        <Button
          theme={'dark'}
          aria-label={'drawer-menu-button'}
          size="$5"
          $md={{ size: '$3' }}
          $gtMd={{ display: 'none' }}
          icon={Menu}
          alignSelf="center"
          space={2}
          scaleIcon={1.5}
          hoverStyle={{ scale: 1.1 }}
          animation={'quick'}
          onPress={toggleMenu}
        />
      </XStack>
      <YStack height={54} width="100%" />
      {children}
    </YStack>
  );
};
