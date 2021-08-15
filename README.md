# archlinux
Paquetes Básicos: Xterm|, google-chrome(aur)|, alacritty*|, code(r)|, rofi*|, feh|, pulseaudio|, pavucontrol|, brightnessctl, xorg-xinit*|, picom|, nerd-fonts-ubuntu-mono(aur), ttf-dejavu, ttf-liberation, noto-fonts, ntfs-3g, udiskie, udisks(aur), arandr, vlc, geeqie, scrot, thunar, network-manager-applet, cbatticon, libnotify|, notifiction-daemon*|, python-pip(sutil)[gcc], pacman-contrib(widget),(configuración .bashrc*), papirus-icon-theme, exa, ccat(aur), neovim, xsel(clipboard nvim), fzf, ripgrep, fd, the_silver_searcher, ctags-git(aur), os-prober*, git (aur*), base-devel, 
yay -Qe




<h1>Configuración Entorno Con ArchLinux y Qtile</h1>
<h2>ArchLinux</h2>
<p>Una vez que tenemos intalado archlinux siguiendo <a href="https://wiki.archlinux.org/title/Installation_guide_(Espa%C3%B1ol)">esta guia </a>, debemos comprobar si tenemos internet con un ping <b>(ping arhclinux.org)</b> no nos deberia dar error, en caso de que nos lo de debemos reinicar, volverlo a comprobar y sigue asi, conectarse a ethernet e instalar networkmanager y configurar el internet con <a href="https://man.archlinux.org/man/nmcli.1">nmcli.</a> Una vez comprobada la conexión vamos a instalar: "xorg", "qtile", "lightdm", "lightdm-gtk-greeter", "xterm", "python-pyp" y "networkmanager, una vez instalados estos paquetes escribiremos <b>"pip install setuptools"</b> y activaremos en el sistema la placa de red y lightdm, para ellos introducimos <b>"systemctl enable NetworkManager"</b> y <b>"systemctl enable lightdm"</b>, una vez hecho esto reiniciamos <b>("reboot")</b> y nos deberia aparecer la pantalla inicial de lightdm y si iniciamos sesión la de Qtile.</p>
<hr>

<h2>Configuración básica Qtile</h2>
<p>Cuando ya estamos dentro de Qtile, veremos un escritorio negro, lo primero que hago yo es instalar "alacritty", para ello hacemos <b>mod + enter</b> y se abrira "xterm" (que es la terminal por defecto de Qtile), y ejecutamos <b>"sudo pacman -S alacritty"</b>, una vez hecho esto, instalamos "code" de la misma manera para poder editar el "config.py" que controla todo nuestro entorno añadiendo: </p>

    # ALACRITTY (Terminal)
    Key([mod], "Return", lazy.spawn(terminal)), # Lanza Alacritty


<h4>AUR</h4>
<p> Ahora instalaremos una herramienta para poder instalar software que no este disponible con "pacman" para ello instalamos "git" y clonamos el repositorio de abajo, luego cambiamos de carpeta a yay-git instalamos "base-devel" y "hacemos makepkg -si"</p> y si se desea se puede eliminar el direcotorio
  
    sudo pacman -S git
    git clone https://aur.archlinux.org/yay-git
    sudo chown -R <NOMBRE>:<NOMBRE> yay-git
    cd yay-git
    sudo pacman -S base-devel
    makepkg -si
    cd ..
    rm yay-git
  
  

<h3>INTERNET</h3>
<p> Es hora de instalar un buscador para copiar código, por ello yo suelo usar google chrome y se instala con yay asique lo usamos <b>"yay -S google-chrome"</b>. 
Le podemos añadir un atajo de teclado en .config/qtile/config.py para no tener que lanzarlo desde la terminal todo el rato, para ello nos vamos a la sección de "keys" y añadimos: </p>

    # GOOGLE CHROME 
    Key([mod], "b", lazy.spawn("google-chrome-stable")),

<h3>MENÚ</h3>
<p>Para previsualizar un menú de aplicaciones y de las que estan abiertas, usaremos "rofi", para ellos hacemos <b>"sudo pacman -S rofi"</b>, y podemos añadir unos atajos como estos: </p>

    # ROFI (Menú de aplicaciones)
    Key([mod], "m", lazy.spawn("rofi -show drun")), # Box con todos los programas
    Key([mod, "shift"], "m", lazy.spawn("rofi -show")), # Box con todos los programas abiertos

<p> Para usar el tema que tengo puesto en rofi, debemos seguir esos pasos, clonar el repositorio y copiar el tema que queramos en "/usr/share/rofi/themes", si quereis ver los temas disponibles en este fichero, mirad <a href="https://github.com/davatorium/rofi-themes">aquí</a></p>
    
    git clone https://github.com/davatorium/rofi-themes.git
    cd rofi-themes/User\ Themes/
    cp onedark.rasi /usr/share/rofi/themes
    cd ~/
    sudo rm -r rofi-themes
    rofi-theme-selector # Buscar onedark y presionar alt + a

<p> Y para los iconos instalamos <b>papirus-icon-theme</b> y <b>nerd-fonts-ubuntu-mono</b>, este útlimo con yay, luego deberemos borrar esa linea en <b>/usr/share/rofi/themes/onedark.rasi</b></p>
    
    font: "Knack Nerd Font 14";

<p> Si quires, también puedes copiar mis configuraciones</p>
    
<h3>FONDOS</h3>
<p> Ahora vamos a quitar ese fondo negro tan soso, para ello haremos uso de las herramientas <b>feh</b> y <b>picom</b>, una vez instaladas con "pacman" debemos poner este comando para que feh se ponga a trabajar y cambie el fondo </p>

    sudo pacman -S picom feh
    feh --bg-scale <RUTA DEL FONDO>

<h3>AUDIO</h3>
<p>Llegados a este punto no tenemos ni audio, por ello vamos a instalar <b>pulseaudio</b> y un controlador gráfico como <b>pavucontrol</b> y activamos el audio en segundo plano </p>
    
    sudo pacman -S pulseaudio pavucontrol
    pulseaudio &
    
<p>Con esto ya tenemos audio, puedes ir a youtube mediante los atajos configurados a probarlo, pero muy posiblemente tengas que acceder a pavucontrol (por rofi por ejemplo) y desmutear el sonido.

<h3>XINIT</h3>
<p>Ahora mismo si hacemos <b>mod + shift + q</b> se perderan todos los cambios, pero no se preocupe, para eso esta xorg-xinit, este paquete lo que hace es que el archivo <b>".xprofile"</b> se ejecute cada vez que iniciamos sesión, por ello lo creamos y le metemos valores, como por ejemplo el fondo del feh, el pulse audio o el picom, es importante que tengan "&" este símbolo detras para que pueda correr al siguente proceso en segundo plano, un ejemplo gráfico lo teneis arriba en mi configuración</p>
    
    touch ~/.xprofile
    //Editanto .xprofile
    pulseaudio &
    feh --bg-scale <RUTA DEL FONDO> &
    picom & 
    
<h3>NOTIFICACIONES</h3>
<p> Para poder recibir notificaciones, necesitamos instalar "libnotify" y "notification-daemon". Una vez instalados hacemos: </p>
    
    # Crea este fichero con nano o vim
    sudo nano /usr/share/dbus-1/services/org.freedesktop.Notifications.service
    # Pega estas líneas
    [D-BUS Service]
    Name=org.freedesktop.Notifications
    Exec=/usr/lib/notification-daemon-1.0/notification-daemon
    //PUEDES PROBARLO PONIENDO:
    notification-send: "Hola Mundo"

    




etc/default
sudo nano grub
GRUB_DISABLE_OS_PROBER=false
grub-mkconfig -o /boot/grub/grub.cfg
