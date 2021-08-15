# grub-install
# Autogenerated from man page /usr/share/man/man8/grub-install.8.gz
complete -c grub-install -l compress -d 'compress GRUB files [optional]'
complete -c grub-install -l disable-shim-lock -d 'disable shim_lock verifier'
complete -c grub-install -l dtb -d 'embed a specific DTB'
complete -c grub-install -s d -l directory -d 'use images and modules under DIR [default=/usr/lib/grub/<platform>]'
complete -c grub-install -l fonts -d 'install FONTS [default=unicode]'
complete -c grub-install -l install-modules -d 'install only MODULES and their dependencies [default=all]'
complete -c grub-install -s k -l pubkey -d 'embed FILE as public key for signature checking'
complete -c grub-install -l locale-directory -d '[default=/usr/share/locale]'
complete -c grub-install -l locales -d 'install only LOCALES [default=all]'
complete -c grub-install -l modules -d 'pre-load specified modules MODULES'
complete -c grub-install -l sbat -d 'SBAT metadata'
complete -c grub-install -l themes -d 'install THEMES [default=starfield]'
complete -c grub-install -s v -l verbose -d 'print verbose messages'
complete -c grub-install -l allow-floppy -d 'make the drive also bootable as floppy (default for fdX devices)'
complete -c grub-install -l boot-directory -d 'install GRUB images under the directory DIR/grub instead of the \\,/boot/grub\\…'
complete -c grub-install -l bootloader-id -d 'the ID of bootloader.  This option is only available on EFI and Macs'
complete -c grub-install -l core-compress -d 'choose the compression to use for core image'
complete -c grub-install -l disk-module -d 'disk module to use (biosdisk or native)'
complete -c grub-install -l efi-directory -d 'use DIR as the EFI System Partition root'
complete -c grub-install -l force -d 'install even if problems are detected'
complete -c grub-install -l force-file-id -d 'use identifier file even if UUID is available'
complete -c grub-install -l label-bgcolor -d 'use COLOR for label background'
complete -c grub-install -l label-color -d 'use COLOR for label'
complete -c grub-install -l label-font -d 'use FILE as font for label '
complete -c grub-install -l no-bootsector -d 'do not install bootsector'
complete -c grub-install -l no-nvram -d 'don\'t update the `boot-device\'/`Boot*\' NVRAM variables'
complete -c grub-install -l no-rs-codes -d 'Do not apply any reed-solomon codes when embedding core. img'
complete -c grub-install -l product-version -d 'use STRING as product version'
complete -c grub-install -l recheck -d 'delete device map if it already exists'
complete -c grub-install -l removable -d 'the installation device is removable.  This option is only available on EFI'
complete -c grub-install -s s -l skip-fs-probe -d 'do not probe for filesystems in DEVICE'
complete -c grub-install -l target -d 'install GRUB for TARGET platform [default=i386-pc]; available targets: arm-co…'
complete -c grub-install -s '?' -l help -d 'give this help list'
complete -c grub-install -l usage -d 'give a short usage message'
complete -c grub-install -l macppc-directory
complete -c grub-install -s V -l version -d 'print program version'

