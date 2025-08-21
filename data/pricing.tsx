import { HStack, Text, VStack } from '@chakra-ui/react'

export default {
  title: 'Simple Pricing',
  description: 'Simple, transparent pricing for everyone.',
  plans: [
    {
      id: 'free',
      title: 'Free',
      description: 'Try full features for free',
      price: 'Free',
      features: [
        {
          title: '3 Sessions Weekly',
        },
        {
          title: '10 Copilot Use Weekly',
        },
        {
          title: 'Normal Copilot Models',
        },
      ],
      action: {
        href: 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009',
      },
    },
    {
      id: 'weekly',
      title: 'Weekly',
      description: 'Popular',
      price: (
        <VStack spacing="1" align="flex-start">
          <Text 
            fontSize="lg" 
            color="gray.500" 
            textDecoration="line-through"
            fontWeight="normal"
          >
            $25 / month
          </Text>
          <HStack spacing="2" align="baseline">
            <Text fontSize="2xl" fontWeight="bold" color="green.500">
              $14.99
            </Text>
            <Text fontSize="sm" color="muted">
              / month
            </Text>
          </HStack>
        </VStack>
      ),
      isRecommended: true,
      features: [
        {
          title: '1,000 Copilot Use Weekly',
        },
        {
          title: 'Unlimited Sessions Weekly',
        },
        {
          title: 'Most Powerful Copilot Models',
        },
        {
          title: 'Full Profile & Documents',
        },
        {
          title: 'Full Copilot Customization',
        },
        {
          title: 'Unlimited Interview History',
        },
        {
          title: 'Priority Customer Support',
        },
        null,
        {
          title: 'Promotion: Get 1,000 Copilot use weekly for a limited time!',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009',
      },
    },
    {
      id: 'quarterly',
      title: 'Quarterly',
      description: 'Best Value',
      price: (
        <VStack spacing="1" align="flex-start">
          <Text 
            fontSize="lg" 
            color="gray.500" 
            textDecoration="line-through"
            fontWeight="normal"
          >
            $80 / 3 months
          </Text>
          <HStack spacing="2" align="baseline">
            <Text fontSize="2xl" fontWeight="bold" color="green.500">
              $39
            </Text>
            <Text fontSize="sm" color="muted">
              / 3 months
            </Text>
          </HStack>
        </VStack>
      ),
      features: [
        {
          title: '1,000 Copilot Use Weekly',
        },
        {
          title: 'Unlimited Sessions Weekly',
        },
        {
          title: 'Most Powerful Copilot Models',
        },
        {
          title: 'Full Profile & Documents',
        },
        {
          title: 'Full Copilot Customization',
        },
        {
          title: 'Unlimited Interview History',
        },
        {
          title: 'Priority Customer Support',
        },
        null,
        {
          title: 'Promotion: Get 1,000 Copilot use weekly for a limited time!',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009',
      },
    },
  ],
}