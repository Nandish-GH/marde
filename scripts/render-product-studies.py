"""Render website-only concept studies. Never save or modify the source .blend.

Blender --background --factory-startup --disable-autoexec --python this.py -- <air.blend> <output-dir>
Air uses visible source geometry, excluding engineering guides/archived iterations.
Ground and Modules are abstract role studies, not CAD, dimensions or capability claims.
"""
import bpy
import math
import os
import sys
from mathutils import Vector

source, output = sys.argv[sys.argv.index('--') + 1:]
os.makedirs(output, exist_ok=True)

def setup(target, scale):
    scene = bpy.context.scene
    camera = bpy.data.objects.new('WebsiteCamera', bpy.data.cameras.new('WebsiteCamera'))
    scene.collection.objects.link(camera)
    scene.camera = camera
    camera.location = Vector(target) + Vector((6, 8, 5.5))
    camera.rotation_euler = (Vector(target) - camera.location).to_track_quat('-Z', 'Y').to_euler()
    camera.data.type = 'ORTHO'
    camera.data.ortho_scale = scale
    scene.render.engine = 'BLENDER_WORKBENCH'
    shading = scene.display.shading
    shading.light = 'STUDIO'
    shading.studiolight_rotate_z = .4
    shading.color_type = 'OBJECT'
    shading.show_shadows = False
    shading.show_cavity = True
    shading.cavity_type = 'BOTH'
    shading.curvature_ridge_factor = 1.3
    shading.curvature_valley_factor = .8
    shading.show_object_outline = True
    shading.object_outline_color = (.09, .14, .2)
    scene.render.resolution_x = 1440
    scene.render.resolution_y = 1000
    scene.render.resolution_percentage = 100
    scene.render.film_transparent = True
    scene.render.image_settings.file_format = 'PNG'
    scene.render.image_settings.color_mode = 'RGBA'
    scene.view_settings.view_transform = 'Standard'
    return scene

def block(name, position, dimensions, bevel=.04, color=(.32,.43,.55,1)):
    bpy.ops.mesh.primitive_cube_add(size=1, location=position)
    obj = bpy.context.object
    obj.name = name
    obj.dimensions = dimensions
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    mod = obj.modifiers.new('Soft technical edge','BEVEL')
    mod.width = bevel
    mod.segments = 3
    obj.modifiers.new('Weighted faces', 'WEIGHTED_NORMAL')
    obj.color = color
    return obj

bpy.ops.wm.open_mainfile(filepath=source, load_ui=False, use_scripts=False)
excluded = ['ENVELOPE', 'KEEP_OUT', 'SWEEP', 'MOUNT_ZONE', 'GUIDE', 'ZONE', 'CLEARANCE',
            'VOLUME', 'REFERENCE', 'DATUM', 'SCALE_', 'GROUND_PLANE', 'CG_BOX', 'BEFORE_']
for obj in bpy.context.scene.objects:
    if obj.type not in {'MESH','CURVE','SURFACE'}:
        obj.hide_render = True
        continue
    if not obj.visible_get() or any(word in obj.name.upper() for word in excluded):
        obj.hide_render = True
    obj.color = (.32,.43,.55,1)
    if 'PROP' in obj.name: obj.color = (.5,.63,.75,1)
scene = setup((0,0,1.15), 5.7)
scene.render.filepath = os.path.join(output,'air.png')
bpy.ops.render.render(write_still=True)

# Broad role concept based on the existing approved compact four-wheel illustration.
bpy.ops.wm.read_factory_settings(use_empty=True)
block('Mobility base concept',(0,0,.44),(1.7,2.1,.38),.16)
block('Payload interface concept',(0,-.06,.72),(1.22,1.48,.2),.08)
block('Removable payload concept',(0,-.1,.95),(.96,1.18,.3),.08)
block('Interface highlight',(0,.65,.72),(1.1,.025,.07),.01,(.54,.72,.92,1))
for x in [-.86,.86]:
    for y in [-.68,.68]:
        bpy.ops.mesh.primitive_cylinder_add(vertices=48, radius=.33, depth=.24, location=(x,y,.33), rotation=(0,math.pi/2,0))
        wheel=bpy.context.object
        wheel.color=(.14,.21,.29,1)
        bevel=wheel.modifiers.new('Wheel edge','BEVEL');bevel.width=.035;bevel.segments=3
        wheel.modifiers.new('Wheel normals','WEIGHTED_NORMAL')
        bpy.ops.mesh.primitive_cylinder_add(vertices=32, radius=.19, depth=.255, location=(x,y,.33), rotation=(0,math.pi/2,0))
        bpy.context.object.color=(.36,.48,.61,1)
scene=setup((0,0,.55),3.6)
scene.render.filepath=os.path.join(output,'ground.png')
bpy.ops.render.render(write_still=True)

bpy.ops.wm.read_factory_settings(use_empty=True)
block('Module interface concept',(0,0,.15),(1.55,1.55,.19),.055)
block('Module outline',(0,0,.3),(1.22,1.22,.1),.04,(.5,.67,.86,1))
block('Payload concept',(0,0,1.15),(1.15,1.15,.82),.075)
block('Module lid',(0,0,1.61),(1.18,1.18,.09),.03,(.46,.59,.73,1))
scene=setup((0,0,.88),3.5)
scene.render.filepath=os.path.join(output,'modules.png')
bpy.ops.render.render(write_still=True)
