# archlinux
Paquetes Básicos: Xterm|, google-chrome(aur)|, alacritty*|, code(r)|, rofi*, feh, pulseaudio, pavucontrol, brightnessctl, xorg-xinit*, picom, nerd-fonts-ubuntu-mono(aur), ttf-dejavu, ttf-liberation, noto-fonts, ntfs-3g, udiskie, udisks(aur), arandr, vlc, geeqie, scrot, thunar, network-manager-applet, cbatticon, libnotify, notifiction-daemon*, python-pip(sutil)[gcc], pacman-contrib(widget),(configuración .bashrc*), papirus-icon-theme, exa, ccat(aur), neovim, xsel(clipboard nvim), fzf, ripgrep, fd, the_silver_searcher, ctags-git(aur), os-prober*, git (aur*), base-devel, 
yay -Qe




<h1>Configuración Entorno Con ArchLinux y Qtile</h1>
<h2>ArchLinux</h2>
<p>Una vez que tenemos intalado archlinux siguiendo <a href="https://wiki.archlinux.org/title/Installation_guide_(Espa%C3%B1ol)">esta guia </a>, debemos comprobar si tenemos internet con un ping (ping arhclinux.org) no nos deberia dar error, en caso de que nos lo de debemos reinicar, volverlo a comprobar y sigue asi, conectarse a ethernet e instalar networkmanager y configurar el internet con <a href="https://man.archlinux.org/man/nmcli.1">nmcli.</a> Una vez comprobada la conexión vamos a instalar: "xorg", "qtile", "lightdm", "lightdm-gtk-greeter", "xterm", "python-pyp" y "networkmanager, una vez instalados estos paquetes escribiremos "pip install setuptools" y activaremos en el sistema la placa de red y lightdm, para ellos introducimos "systemctl enable NetworkManager" y "systemctl enable lightdm", una vez hecho esto reiniciamos ("reboot") y nos deberia aparecer la pantalla inicial de lightdm y si iniciamos sesión la de Qtile.</p>
<hr>

<h2>Configuración básica Qtile</h2>
<p>Cuando ya estamos dentro de Qtile, veremos un escritorio negro, lo primero que hago yo es instalar "alacritty", para ello hacemos mod+enter y se abrira "xterm" (que es la terminal por defecto de Qtile), y ejecutamos sudo pacman -S "alacritty", una vez hecho esto, instalamos "code" de la misma manera para poder editar el "config.py" que controla todo nuestro entorno. </p>

<h4>AUR</h4>
<p> Ahora instalaremos una herramienta para poder instalar software que no este disponible con "pacman" para ello instalamos "git" (sudo pacman -S git) y haciendo uso de "git clone" clonaremos el repositorio de "https:aur.archlinux.org/yay-git.git" y se nos creara un directorio con nombre yay-git, cambiamos de usuario con chown "sudo chown -R <NOMBRE>:<NOMBRE> yay-git" y nos cambiamos a el con "cd yay-git", instalamos base-devel con pacman y hacemos un paquete con "makepkg -si" y ya esta, tenemos acceso a yay para instalar paquetes </p> 

<h3>INTERNET</h3>
<p> Es hora de instalar un buscador para copiar código, para ello yo suelo usar google chrome y se instala con yay asique lo usamos "yay -S google-chrome", firefox, por ejemplo se puede descargar con pacman.</p>

<h3>MENÚ</h3>
<p>
