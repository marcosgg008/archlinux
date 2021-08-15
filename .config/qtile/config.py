from typing import List  # noqa: F401

from libqtile import bar, layout, widget
from libqtile.config import Click, Drag, Group, Key, Match, Screen
from libqtile.lazy import lazy
from libqtile.utils import guess_terminal

mod = "mod4"
terminal = guess_terminal()

keys = [
    #----VENTANAS----#

    # Alterna entre ventanas
    Key([mod], "h", lazy.layout.left()),
    Key([mod], "l", lazy.layout.right()),
    Key([mod], "j", lazy.layout.down()),
    Key([mod], "k", lazy.layout.up()),

    # Mueve las venanas de posición
    Key([mod, "shift"], "h", lazy.layout.shuffle_left()),
    Key([mod, "shift"], "l", lazy.layout.shuffle_right()),
    Key([mod, "shift"], "j", lazy.layout.shuffle_down()),
    Key([mod, "shift"], "k", lazy.layout.shuffle_up()),

    # Redimensiona las ventanas en modo Column
    Key([mod, "control"], "h", lazy.layout.grow_left()),
    Key([mod, "control"], "l", lazy.layout.grow_right()),
    Key([mod, "control"], "j", lazy.layout.grow_down()),
    Key([mod, "control"], "k", lazy.layout.grow_up()),
    Key([mod, "control"], "n", lazy.layout.normalize()),

    #----ATAJOS----#

    # Varios
    Key([mod], "Tab", lazy.next_layout()), # Cambian el layout
    Key([mod], "w", lazy.window.kill()), # Cierra ventana
    Key([mod, "control"], "r", lazy.restart()), # Reinicial el config.py
    Key([mod, "control"], "q", lazy.shutdown()), # Cierra sesioón
    Key([mod, "shift"], "f", lazy.window.toggle_floating()), # Devuelve una ventana flotante a su posición original

    # Volumen
    Key([], "XF86AudioLowerVolume", lazy.spawn("pactl set-sink-volume @DEFAULT_SINK@ -5%")),
    Key([], "XF86AudioRaiseVolume", lazy.spawn("pactl set-sink-volume @DEFAULT_SINK@ +5%")),
    Key([], "XF86AudioMute", lazy.spawn("pactl set-sink-mute @DEFAULT_SINK@ toggle")),

    #----PROGRAMAS----#

    # ALACRITTY (Terminal)
    Key([mod], "Return", lazy.spawn(terminal)), # Lanza Alacritty

    # ROFI (Menú de aplicaciones)
    Key([mod], "m", lazy.spawn("rofi -show drun")), # Box con todos los programas
    Key([mod, "shift"], "m", lazy.spawn("rofi -show")), # Box con todos los programas abiertos

    # GOOGLE CHROME
    Key([mod], "b", lazy.spawn("google-chrome-stable")),

    # BRIGHTNESSCTL (BrilloPantalla)
    Key([], "XF86MonBrightnessUp", lazy.spawn("brightnessctl set +10%")),
    Key([], "XF86MonBrightnessDown", lazy.spawn("brightnessctl set 10%-")),

    # SCROT (ScreenShot)
    Key([mod], "s", lazy.spawn("scrot")),

    # Thunar (Explorador Archivos)
    Key([mod], "e", lazy.spawn("thunar")),

]

groups = [Group(i) for i in ["爵 ", " ", " ", " ", " "]] # Define el nombre de los grupos

for i, group in enumerate(groups):
    actual_key = str(i + 1)
    keys.extend([
        Key([mod], actual_key, lazy.group[group.name].toscreen()), # Nos lleva al grupo que queramos
        Key([mod, "shift"], actual_key, lazy.window.togroup(group.name)) # Manda la ventana al grupo que queramos
    ])


layout_theme = {"border_width": 2,
                "margin": 8,
                "border_focus": "e1acff",
                "border_normal": "1D2330"
                }

layouts = [
    #layout.Bsp(**layout_theme),
    #layout.Stack(stacks=2, **layout_theme),
    #layout.Columns(**layout_theme),
    #layout.RatioTile(**layout_theme),
    #layout.Tile(shift_windows=True, **layout_theme),
    #layout.VerticalTile(**layout_theme),
    # layout.Matrix(**layout_theme),
    #layout.Zoomy(**layout_theme),
    # layout.Stack(num_stacks=2),
    # layout.RatioTile(**layout_theme),
    # layout.TreeTab(),
    # layout.Floating(**layout_theme),
    layout.MonadWide(**layout_theme),
    layout.MonadTall(**layout_theme),
    layout.Max(**layout_theme),
]

colors = [["#282c34", "#282c34"], # panel background
          ["#3d3f4b", "#434758"], # background for current screen tab
          ["#ffffff", "#ffffff"], # font color for group names
          ["#ff5555", "#ff5555"], # border line color for current tab
          ["#74438f", "#74438f"], # border line color for 'other tabs' and color for 'odd widgets'
          ["#4f76c7", "#4f76c7"], # color for the 'even widgets'
          ["#e1acff", "#e1acff"], # window name
          ["#ecbbfb", "#ecbbfb"]] # backbround for inactive screens


#----Configuración Por Defecto Widgets----#
widget_defaults = dict(
    font='UbuntuMono Nerd Font',
    fontsize = 16,
    padding = 2,
    background=colors[2]
)

screens = [ # Para tener varias pantallas se debe copiar el código de Screen y borrar el Systray
    Screen(
        top=bar.Bar(
            [
                widget.GroupBox(
                    foreground=["#f1ffff", "#f1ffff"],
                    background=["#0f101a", "#0f101a"],
                    font='UbuntuMono Nerd Font',
                    fontsize=19,
                    margin_y=3,
                    margin_x=0,
                    padding_y=8,
                    padding_x=5,
                    borderwidth=1,
                    active=["#f1ffff", "#f1ffff"],
                    inactive=["#4c566a", "#4c566a"],
                    rounded=False,
                    highlight_method='block',
                    urgent_alert_method='block',
                    urgent_border=["#F07178", "#F07178"],
                    this_current_screen_border=["#a151d3", "#a151d3"],
                    this_screen_border=["#353c4a", "#353c4a"],
                    other_current_screen_border=["#0f101a", "#0f101a"],
                    other_screen_border=["#0f101a", "#0f101a"],
                    disable_drag=True,
                ),
                widget.WindowName(
                    foreground=["#a151d3", "#a151d3"],
                    background=["#0f101a", "#0f101a"],
                    font='UbuntuMono Nerd Font Bold',
                    fontsize=14,
                    max_chars=30,
                    padding=5
                ),
                # widget.Volume(
                #     background=["f4c77d", "f4c77d"],
                #     device='defoult',
                # ),
                widget.TextBox(
                    background=["#0f101a", "#0f101a"],
                    foreground=["f4c77d", "f4c77d"],
                    text="", # Icon: nf-oct-triangle_left
                    fontsize=37,
                    padding=-2
                ),
                widget.TextBox(
                    text=' ',
                    background=["f4c77d", "f4c77d"],
                    foreground=["#0f101a", "#0f101a"],
                ),
                widget.CheckUpdates(
                    background=["f4c77d", "f4c77d"],
                    colour_have_updates=["#0f101a","#0f101a"],
                    colour_no_updates=["#0f101a","#0f101a"],
                    no_update_string='0',
                    display_format='{updates}',
                    update_interval=1800,
                    custom_command='checkupdates',
                ),
                widget.TextBox(
                    background=["f4c77d", "f4c77d"],
                    foreground=["f89f7e", "f89f7e"],
                    text="", # Icon: nf-oct-triangle_left
                    fontsize=37,
                    padding=-2
                ),
                widget.TextBox(
                    text='',
                    background=["f89f7e", "f89f7e"],
                    foreground=["#0f101a", "#0f101a"],
                ),
                widget.CPU(
                    background=["f89f7e", "f89f7e"],
                    foreground=["#0f101a", "#0f101a"],
                ),
                widget.Sep(
                    linewidth=0,
                    padding=5,
                    background=["f89f7e", "f89f7e"],
                ),
                widget.TextBox(
                    background=["f89f7e", "f89f7e"],
                    foreground=["#f37974", "#f37974"],
                    text="", # Icon: nf-oct-triangle_left
                    fontsize=37,
                    padding=-2
                ),
                widget.CurrentLayoutIcon(
                    scale=0.65,
                    background=["#f37974", "#f37974"],
                    foreground=["#0f101a", "#0f101a"],
                ),
                widget.CurrentLayout(
                    background=["#f37974", "#f37974"],
                    foreground=["#0f101a", "#0f101a"],
                ),
                widget.Sep(
                    linewidth=0,
                    padding=5,
                    background=["#f37974", "#f37974"],
                ),
                widget.TextBox(
                    background=["#f37974", "#f37974"],
                    foreground=["#a151d3", "#a151d3"],
                    text="", # Icon: nf-oct-triangle_left
                    fontsize=37,
                    padding=-2
                ),
                widget.TextBox(
                    text=' ',
                    background=["#a151d3", "#a151d3"],
                    foreground=["#0f101a", "#0f101a"],
                ),
                widget.Clock(
                    background=["#a151d3", "#a151d3"],
                    foreground=["#0f101a", "#0f101a"],
                    format='%d/%m/%Y - %a - %H:%M '
                ),
                 widget.TextBox(
                    background=["#a151d3", "#a151d3"],
                    foreground=["#0f101a", "#0f101a"],
                    text="", # Icon: nf-oct-triangle_left
                    fontsize=37,
                    padding=-2
                ),
                widget.Systray(
                    background=["#0f101a", "#0f101a"],
                ),
            ],
            20,
            opacity=0.95
        ),
    ),
]

# Drag floating layouts.
mouse = [
    Drag([mod], "Button1", lazy.window.set_position_floating(),
         start=lazy.window.get_position()),
    Drag([mod], "Button3", lazy.window.set_size_floating(),
         start=lazy.window.get_size()),
    Click([mod], "Button2", lazy.window.bring_to_front())
]

dgroups_key_binder = None
dgroups_app_rules = []  # type: List
follow_mouse_focus = False
bring_front_click = False
cursor_warp = False
floating_layout = layout.Floating(float_rules=[
    # Run the utility of `xprop` to see the wm class and name of an X client.
    *layout.Floating.default_float_rules,
    Match(wm_class='confirmreset'),  # gitk
    Match(wm_class='makebranch'),  # gitk
    Match(wm_class='maketag'),  # gitk
    Match(wm_class='ssh-askpass'),  # ssh-askpass
    Match(title='branchdialog'),  # gitk
    Match(title='pinentry'),  # GPG key password entry
], border_focus="#a151d3r")
auto_fullscreen = True
focus_on_window_activation = "smart"
reconfigure_screens = True

# If things like steam games want to auto-minimize themselves when losing
# focus, should we respect this or not?
auto_minimize = True

# XXX: Gasp! We're lying here. In fact, nobody really uses or cares about this
# string besides java UI toolkits; you can see several discussions on the
# mailing lists, GitHub issues, and other WM documentation that suggest setting
# this string if your java app doesn't work correctly. We may as well just lie
# and say that we're a working one by default.
#
# We choose LG3D to maximize irony: it is a 3D non-reparenting WM written in
# java that happens to be on java's whitelist.
wmname = "LG3D"
