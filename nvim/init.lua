-- ==============================
--  Rebind Leader Key to Space
-- ==============================
vim.g.mapleader = " "  -- Set the leader key to Space

-- ==============================
--  Initialize Lazy.nvim
-- ==============================
require('lazy').setup({
    -- Custom configuration modules (if exists)
    require('config.lazy'),    -- Custom lazy-loaded configuration
    require('config.keymaps'), -- Keybinding configurations

    -- Plugin list
    'tpope/vim-sensible',               -- Sensible defaults for Vim
    'LazyVim/LazyVim',                  -- LazyVim configuration
    'nvim-treesitter/nvim-treesitter',   -- Syntax highlighting & parsing
    'hrsh7th/nvim-cmp',                  -- Auto-completion
    'folke/which-key.nvim',              -- Keybinding helper
    'neovim/nvim-lspconfig',             -- LSP support
    'williamboman/mason.nvim',           -- LSP/DAP installer
    'folke/tokyonight.nvim',             -- Tokyonight colorscheme
    'echasnovski/mini.files',            -- Minimalist file explorer
    'folke/trouble.nvim',                -- Better diagnostics & quickfix
    'windwp/nvim-autopairs',             -- Auto-closing pairs
    'nvim-neo-tree/neo-tree.nvim',       -- Alternative file explorer
    'folke/lazydev.nvim',                -- Development tools
    'nvim-tree/nvim-tree.lua',           -- File explorer (primary)
})

-- ==============================
--  UI Settings
-- ==============================
vim.opt.termguicolors = true              -- Enable 24-bit color
vim.cmd([[colorscheme tokyonight]])       -- Set colorscheme to tokyonight

-- ==============================
--  Disable netrw (to avoid conflicts with nvim-tree)
-- ==============================
vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1

-- ==============================
--  Nvim-Tree Setup
-- ==============================
require("nvim-tree").setup({
    sort = {
        sorter = "case_sensitive",       -- Enable case-sensitive sorting
    },
    view = {
        width = 30,                      -- Set tree width
    },
    renderer = {
        group_empty = true,              -- Group empty directories
    },
    filters = {
        dotfiles = true,                 -- Hide dotfiles
    },
})

-- ==============================
--  Keybinding to Open Nvim-Tree Manually with `<leader>t`
-- ==============================
vim.keymap.set("n", "<leader>t", function()
    -- Toggle Nvim-Tree
    require("nvim-tree.api").tree.toggle()
end, { noremap = true, silent = true })
