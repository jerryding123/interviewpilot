'use client'

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

export default function PrivacyPage() {
  return (
    <Container maxW="container.md" py={16} mt={10}>
      <Heading as="h1" size="xl" mb={6} pt={8}>
        Privacy Policy
      </Heading>
      <VStack spacing={6} align="stretch">
        <Text>
          Interview Pilot values your privacy and is committed to protecting your personal data. This Privacy Policy explains how we handle your information when you use our iOS application.
        </Text>
        
        <Box>
          <Heading as="h2" size="md" mb={2}>
            No Collection of Personal Data
          </Heading>
          <Text>
            We do not collect, store, or process any personal data from our users unless explicitly required for a feature and consented to by you.
          </Text>
        </Box>
        
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Data Security
          </Heading>
          <Text>
            Whenever possible, all data processing occurs on your device. Your interview responses, analysis, and any related data remain local and are not transmitted to our servers unless explicitly required for a feature and agreed to by you.
          </Text>
          <Text mt={2}>
            If a specific feature requires transmitting data, such as cloud-based enhancements or optional backups, we will inform you and request your consent before proceeding. Any such transmission will be encrypted and handled securely.
          </Text>
          <Text mt={2}>
            We implement industry-standard security measures to protect any data that may be processed through our service. However, as no system is completely secure, we recommend using strong security practices on your devices.
          </Text>
        </Box>
        
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Device Permissions
          </Heading>
          <Text>
            Our app may request access to your device's microphone to enable interview recording functionality. We may also request access to your device storage to save interview recordings and responses locally. These permissions are only used for the core functionality of the app and not for collecting personal data. All audio processing happens on your device.
          </Text>
        </Box>
        
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Data Retention
          </Heading>
          <Text>
            Any data created while using our app (such as interview responses) is stored locally on your device and on iCloud and remains there until you choose to delete it. You can delete this data at any time by deleting the app from your device or by deleting the data from iCloud.
          </Text>
        </Box>
        
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Third-Party Services
          </Heading>
          <Text>
            Our app may use third-party services for specific functionality. These services have their own privacy policies, and we encourage you to review them.
          </Text>
        </Box>
        
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Your Rights
          </Heading>
          <Text>
            You have the right to access, modify, or delete any of your data that might be stored in the app. Since data is stored locally on your device or on iCloud, you can exercise these rights directly by managing your device storage or iCloud storage.
          </Text>
        </Box>
        
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Children's Privacy
          </Heading>
          <Text>
            Our app is not directed to children under the age of 13, and we do not knowingly collect or store information from children under 13. If you believe we might have collected information from a child under 13, please contact us immediately.
          </Text>
        </Box>
        
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Changes to This Policy
          </Heading>
          <Text>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes through the app or via email if we have your contact information.
          </Text>
        </Box>
        
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Contact Information
          </Heading>
          <Text>
            If you have any questions about our Privacy Policy, please contact us at LiberaceAI@gmail.com.
          </Text>
        </Box>
        
        <Text fontStyle="italic" mt={4} color="gray.600">
          Last updated: May 6, 2025
        </Text>
      </VStack>
    </Container>
  )
}