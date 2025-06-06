# Shopify Theme Development with Shopify CLI

This guide explains how to connect a Shopify store using the Shopify CLI and outlines the development workflow.
## Requirement Environment
Before you begin, make sure you have the following:
- Node.js (v16.x or later)
- Git installed
- A Shopify Partner account or a Development store
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/installation) installed

To install Shopify CLI:

```bash
npm install -g @shopify/cli @shopify/theme

Connect Shopify CLI to a Store
  shopify theme dev --store your-store-name.myshopify.com

Create or Clone Your Theme

git clone https://github.com/your-repo/your-theme.git
cd your-theme

Start Theme Development
Run the this commend in bash/cmd
  shopify theme dev

Deploy Theme to Shopify Store

Step 1: Push theme to the store
      shopify theme push
Step 2: List all themes
      shopify theme list
Step 3: Publish the theme 
      shopify theme publish --theme-id=123456789
