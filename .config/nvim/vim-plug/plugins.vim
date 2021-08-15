call plug#begin('~/.config/nvim/plugged')

    " Themes
    Plug 'joshdick/onedark.vim'

    " Comment code
    Plug 'tpope/vim-commentary'

    " IDE
    Plug 'easymotion/vim-easymotion'
    Plug 'scrooloose/nerdtree'
    Plug 'christoomey/vim-tmux-navigator'

    " Syntax support
    Plug 'sheerun/vim-polyglot'

    " Autopairs
    Plug 'jiangmiao/auto-pairs'

    " Icons
    Plug 'ryanoasis/vim-devicons'

    " Intellisense
    Plug 'neoclide/coc.nvim', {'branch': 'release'}

    " Airline
    Plug 'vim-airline/vim-airline'
    Plug 'vim-airline/vim-airline-themes'

    " Autoclose tags
    Plug 'alvan/vim-closetag'
    " Ranger
    Plug 'kevinhwang91/rnvimr', {'do': 'make sync'}
    " Fzf
    Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
    Plug 'junegunn/fzf.vim'
    Plug 'airblade/vim-rooter'
call plug#end()
